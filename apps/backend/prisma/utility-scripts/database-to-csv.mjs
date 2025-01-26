import path from "node:path";
import fs from "node:fs";
import { exec } from "node:child_process";
import { fileURLToPath } from "node:url";
import * as readline from "node:readline";

const query =
  "SELECT JobOffer.id, JobOffer.positionName, JobOffer.dataSourceCode, datetime(JobOffer.createdAt / 1000, 'unixepoch') as createdAt, datetime(JobOffer.updatedAt / 1000, 'unixepoch') as updatedAt, datetime(JobOffer.expirationDate / 1000, 'unixepoch') as expirationDate, JobOffer.companyName, GROUP_CONCAT(DISTINCT PositionLevel.value) AS positionLevels, GROUP_CONCAT(DISTINCT ContractType.value) AS contractTypes, GROUP_CONCAT(DISTINCT WorkMode.value) AS workModes, GROUP_CONCAT(DISTINCT WorkSchedule.value) AS workSchedules, GROUP_CONCAT(DISTINCT Technology.value) AS technologies, GROUP_CONCAT(DISTINCT OfferUrl.value) AS offerUrls, GROUP_CONCAT(DISTINCT Workplace.value) AS workplaces, SalaryRange.min AS salaryMin, SalaryRange.max AS salaryMax, SalaryRange.currency AS salaryCurrency, SalaryRange.type AS salaryType, SalaryRange.timeUnit AS salaryTimeUnit FROM JobOffer LEFT JOIN _PositionLevels ON JobOffer.id = _PositionLevels.A LEFT JOIN PositionLevel ON _PositionLevels.B = PositionLevel.id LEFT JOIN _ContractTypes ON JobOffer.id = _ContractTypes.B LEFT JOIN ContractType ON _ContractTypes.A = ContractType.id LEFT JOIN _WorkModes ON JobOffer.id = _WorkModes.A LEFT JOIN WorkMode ON _WorkModes.B = WorkMode.id LEFT JOIN _WorkSchedules ON JobOffer.id = _WorkSchedules.A LEFT JOIN WorkSchedule ON _WorkSchedules.B = WorkSchedule.id LEFT JOIN _Technologies ON JobOffer.id = _Technologies.A LEFT JOIN Technology ON _Technologies.B = Technology.id LEFT JOIN OfferUrl ON JobOffer.id = OfferUrl.jobOfferId LEFT JOIN _Workplaces ON JobOffer.id = _Workplaces.A LEFT JOIN Workplace ON _Workplaces.B = Workplace.id LEFT JOIN SalaryRange ON JobOffer.id = SalaryRange.jobOfferId GROUP BY JobOffer.id;";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const csvDir = path.join(__dirname, "csv");

const askQuestion = query => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve =>
    rl.question(query, ans => {
      rl.close();
      resolve(ans);
    }),
  );
};

const executeCommand = command => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: `, error);
        reject(error);
        return;
      }

      if (stderr) {
        console.error(stderr);
      }
      resolve(stdout);
    });
  });
};

const ensureDirExists = async () => {
  try {
    await fs.promises.mkdir(csvDir, { recursive: true });
  } catch (error) {
    console.error(`Error creating backup directory: ${csvDir}`, error);
    throw error;
  }
};

const createCsv = async () => {
  const dbFile = await askQuestion("Write SQLite .db filename (without .db extension): ");

  const dbFilePath = path.join(__dirname, `${dbFile}.db`);
  const csvFilePath = path.join(csvDir, `${dbFile}.csv`);

  await ensureDirExists();

  const command = `sqlite3 "${dbFilePath}" ".mode csv" ".headers on" ".output '${csvFilePath}'" "${query}" ".output stdout" ".exit"`;

  try {
    const output = await executeCommand(command);
    console.log(`CSV file created at ${csvFilePath}`);
    console.log("Command output:", output);
  } catch (error) {
    console.error("Failed to create CSV file", error);
  }
};

createCsv();
