import { Controller, Get, Post, Body } from '@nestjs/common';
import {CreateMessageDto} from './dtos/create-messages.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){
        return 'messages';
    }

    @Post()
    createMessages(@Body() body: CreateMessageDto){
        console.log(body);
        
    }

    @Get('/:id')
    getMessages(){

    }
}
