import {Injectable} from '@nestjs/common';
import {MessagesRepository} from './messages.repository';

@Injectable()
export class MessagesService{
    constructor(public messagesRepo: MessagesRepository){
        // === Don't use ===
        //Service is creating its own dependencies
        //Not applicable to real apps, instead use dependency injection to set up dependencies between different classes
        //this.messagesRepo = new MessagesRepository();
    }
    

    findOne(id: string){
        return this.messagesRepo.findOne(id);
    }

    findAll(){
        return this.messagesRepo.findAll();
    }

    create(content: string){
        return this.messagesRepo.create(content);
    }
}