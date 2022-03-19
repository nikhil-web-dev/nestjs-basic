import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import {CreateMessageDto} from './dtos/create-messages.dto';
import {MessagesService} from './messages.service';

@Controller('messages')
export class MessagesController {
   
    constructor(public messagesService: MessagesService ){
        // === Don't use ===
        //Service is creating its own dependencies
        //Not applicable to real apps, instead use dependency injection to set up dependencies between different classes
        //this.messagesService = new MessagesService();
    }

    @Get()
    listMessages(){
        return this.messagesService.findAll();
    }

    @Post()
    createMessages(@Body() body: CreateMessageDto){
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    async findOnegetMessages(@Param('id') id: string){
        const message = await this.messagesService.findOne(id);
        if(!message){
            throw new NotFoundException('Message not found');
        }
        return message;
    }
}
