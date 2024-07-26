import dayjs from "dayjs";
import cron from "node-cron";
import { DATE_FORMAT } from "@/misc/constants";

abstract class BaseCron {
  protected constructor(schedule: string = "0 7,18 * * *") {
    cron.schedule(schedule, async () => {
      await this.handleCronJob();
    });
  }

  protected abstract handleCronJob(): Promise<void>;

  protected logTimestampWithMessage(message: string) {
    console.log(`${message}: `, dayjs(Date.now()).format(`${DATE_FORMAT} HH:mm:ss`));
  }
}

export { BaseCron };
