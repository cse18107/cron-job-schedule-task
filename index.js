import cron from 'node-cron';

const exportData = () => {
    const name = "Report 1";
    console.log(`Exported ${name}`)
}

const cronExpression = "*/5 * * * * *";
const isValid = cron.validate(cronExpression);
console.log(`is expression valid ${isValid}`);

cron.schedule(cronExpression, () => {
    exportData();
}, {
    scheduled: false
})