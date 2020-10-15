interface Config {
    DatabaseConnectionString: string
    QueueConnectionString: string
}

const env: any = process.env

export default env as Config