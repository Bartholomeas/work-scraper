import path from "node:path";
import fs from "node:fs";
import { exec } from "node:child_process";
import { fileURLToPath } from "node:url";
import * as readline from "node:readline";

const queries = {
  all_offers_count: "SELECT id, datetime(createdAt / 1000, 'unixepoch') as createdAt, totalOffers FROM AllOffersCountStatistics;",
  offers_count:
    "SELECT id, datetime(createdAt / 1000, 'unixepoch') as createdAt, juniorOffers, midOffers, seniorOffers, otherOffers FROM OffersCountStatistics;",
  categories_count: `SELECT 
    cs.id AS categoriesStatisticsId,
    datetime(cs.createdAt / 1000, 'unixepoch') AS createdAt,
    GROUP_CONCAT(c.name, ', ') AS categoryNames,
    GROUP_CONCAT(c.count, ', ') AS categoryCounts
FROM 
    CategoriesStatistics cs
LEFT JOIN 
    CategorySingleStatistic c 
ON 
    cs.id = c.categoryStatisticsId
GROUP BY 
    cs.id
ORDER BY 
    cs.createdAt DESC;
  `,
  workplaces_count: `SELECT ws.id AS workplacesStatisticsId, datetime(ws.createdAt / 1000, 'unixepoch') AS createdAt, GROUP_CONCAT(w.city, ', ') AS workplaceCities, GROUP_CONCAT(w.count, ', ') AS workplaceCounts FROM WorkplacesStatistics ws LEFT JOIN WorkplaceSingleStatistic w ON ws.id = w.workplaceStatisticsId GROUP BY ws.id ORDER BY ws.createdAt DESC;`,
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const csvDir = path.join(__dirname, "csv", "stats");

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

  await ensureDirExists();

  for (const [name, query] of Object.entries(queries)) {
    const csvFilePath = path.join(csvDir, `${name}.csv`);
    const command = `sqlite3 "${dbFilePath}" ".mode csv" ".headers on" ".output '${csvFilePath}'" "${query}" ".output stdout" ".exit"`;

    try {
      const output = await executeCommand(command);
      console.log(`CSV file created at ${csvFilePath}`);
      console.log("Command output:", output);
    } catch (error) {
      console.error(`Failed to create CSV file for ${name}`, error);
    }
  }
};

createCsv();
