import { Component } from '@angular/core';
import {PostsService} from '../services/post.services';
@Component({
    moduleId : module.id,
    selector : 'user',
    templateUrl : 'user.component.html' ,
    providers : [PostsService]
})
export class UserComponent  { 
  name : string;
  email : string;
  address : address;
  hobbies: string[];
  showhobbies : boolean;
  posts: string;
  constructor(private postsService :PostsService) {
   this.name = '' ;
   this.email = '' ,
   this.address = {
    street :'' , 
    city : '' ,
    state : ''
    }
   this.hobbies = ['Sports','Swimming'] ;
   this.showhobbies = false;
   this.postsService.getPosts().subscribe(posts => {
   this.posts =posts;

   });

}
toggleHobbies(){
  if(this.showhobbies == true) {
    this.showhobbies = false;
  }else {
    this.showhobbies = true;
  }
} 
addHobby(hobby:string) {
  this.hobbies.push(hobby);
}
deleteHobby(i: number) {
  this.hobbies.splice(i,1);
}
}
 interface address {
   street : string;
   city : string ;
   state :string
 }

 interface Post{
   id:number;
   title :string;
   body :string;
 }

 