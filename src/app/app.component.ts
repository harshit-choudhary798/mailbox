import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMailActive: boolean = false
   messages = [
    { sender: 'newemail@example.com', info: "Wish you a happy birthday!", description: 'Hello from Harshit' },
    { sender: 'newemail@example.com', info: "Harshit sent 2 messages to your chat", description: 'Greetings from Demo Team' },
    { sender: 'newemail@example.com', info: "1 message", description: 'Hey there from Support Team' },
    { sender: 'newemail@example.com', info: "2 messages", description: 'Message from Customer Support' },
    { sender: 'newemail@example.com', info: "1 message", description: 'Hello from Marketing Team' },
    { sender: 'newemail@example.com', info: "1 message", description: 'Tech Support says hi' },
    { sender: 'newemail@example.com', info: "Wish you a happy birthday!", description: 'Hello from Harshit' },
    { sender: 'newemail@example.com', info: "Harshit sent 2 messages to your chat", description: 'Greetings from Demo Team' },
    { sender: 'newemail@example.com', info: "1 message", description: 'Hey there from Support Team' }
  ];
  


  emailContent = `
 Dear Team Member,

I hope this message finds you well! This is a friendly reminder about the upcoming training session scheduled for [insert date] at [insert time]. We are excited to offer this opportunity for you to enhance your skills and knowledge in [insert relevant topic].

Important Instructions:

1. Pre-Training Materials: Please ensure you have reviewed the pre-training materials sent to you via email. These resources will help you prepare for the session and make the most of our time together.

2. Session Details: The training will take place [insert location or indicate if it’s virtual]. If it’s a virtual session, please check your calendar for the invite link. We recommend logging in a few minutes early to address any technical issues.

3. Participation: Your engagement is crucial! Feel free to bring any questions or topics you’d like to discuss. We want to make this session as interactive and beneficial as possible.

4. Preparation: Please have your devices ready and ensure you have a stable internet connection if attending online. A notebook or digital document for taking notes would also be helpful.

If you have any questions or need further clarification, please don’t hesitate to reach out. We’re here to support you and look forward to a productive training session!

Best Regards,

The Training Team
`

}
