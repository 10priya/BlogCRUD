import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {
  url ="http://localhost:2000"
  constructor(private http: HttpClient) { }

  //REST API integration
  createUser(userdata){
    
    return this.http.post(this.url+"/createUser",userdata);
  }
   userLogin(userdata){
     return this.http.post(this.url+"/login",userdata);
   }

   createBlog(title:string,description:string,img_Url:File){
     var blogdata : any = new FormData();
     blogdata.append('img_Url' ,img_Url);
     blogdata.append('description' ,description);
     blogdata.append('blogTitle' ,title);

     blogdata.set('img_Url' ,img_Url);
     blogdata.set('description' ,description);
     blogdata.set('blogTitle' ,title);
     console.log('blogdata=====' ,blogdata);
     return this.http.post(this.url+'/createBlog',blogdata);
   }
   findallBlog(){
     return this.http.get(this.url + '/findallBlog');
   }
   updateBlog(formdata){
     return this.http.put(this.url + '/updateBlog/'+formdata._id,formdata);
   }
   deleteBlog(blogId){
     return this.http.delete(this.url + '/deleteBlog/'+blogId);
   }
}
