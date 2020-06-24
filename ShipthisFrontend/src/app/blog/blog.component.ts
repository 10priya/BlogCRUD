import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {UserDataServiceService} from '../user-data-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  Blog  : FormGroup
  updateBlogs:any
  constructor(private fb : FormBuilder ,private router : Router, private blogService : UserDataServiceService) { }
  response : any
   file    : File = null
  allBlog  : any = [];
  blogdata:any =[]
  
  updateblogForm= this.fb.group({
    _id:'',
    blogTitle   : '',
    description : '',
   
  })
  ngOnInit(): void {
    this.Blog = this.fb.group({
      blogTitle   : '',
      description : '',
      img_Url :[null]
    
    });
    this.blogService.findallBlog().subscribe(res =>{
      this.allBlog = res['Data'];
    })
  }

  onFileChanged(event: any) {
   this.file = <File>event.target.files[0];
   this.Blog.patchValue({
    img_Url : this.file
   });
   this.Blog.get('img_Url').updateValueAndValidity()
  }
 

  createBlog(){
    this.blogService.createBlog(this.Blog.value.blogTitle,this.Blog.value.description,this.Blog.value.img_Url).subscribe(res =>{
      this.response = res;
      this.blogService.findallBlog().subscribe(res =>{
        this.allBlog = res['Data'];
        this.Blog.reset();
      })
    })
  }
  edit(blog){
    this.blogdata =blog;
    document.getElementById('updateblogId').style.display = 'block';
    document.getElementById('blog-form').style.display = 'none';
  }

  updateblog(){
  
    this.blogService.updateBlog(this.updateblogForm.value).subscribe(res =>{
     this.response = res;
     
     document.getElementById('updateblogId').style.display = 'none';
    document.getElementById('blog-form').style.display = 'block';
   })
  }
  delete(_id){
    this.blogService.deleteBlog(_id).subscribe(res=>{
      if(res['msg'] === 'Blog is Deleted'){
        this.blogService.findallBlog().subscribe(res =>{
          this.allBlog = res['Data'];
        })
      }else{
        alert('error occured')
      }
      
    })
  }
}
