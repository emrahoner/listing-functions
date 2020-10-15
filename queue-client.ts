import * as azure from 'azure-storage'
import config from './config'

export function send<T>(queueName: string, message: T): Promise<void> {
    var queueClient = azure.createQueueService(config.QueueConnectionString);
    queueClient.messageEncoder = new azure.QueueMessageEncoder.TextBase64QueueMessageEncoder();
    
    return new Promise((resolve, reject) => {
        queueClient.createMessage(queueName, JSON.stringify(message), (error) => {
            if(!error) {
                resolve()
            } else {
                reject(error)
            }
        })
    })
}
