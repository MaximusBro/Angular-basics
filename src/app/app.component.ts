import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title:"I want learn Angular components", text: "I still learning Components", id:1}
    // {title:"My opinion about Angular", text: "I think, i like Angular more, than React. He had all to development", id:2}
  ]
  updatePosts(post: Post ) {
    this.posts.unshift(post)
    // console.log('Post', post)
  }
}
