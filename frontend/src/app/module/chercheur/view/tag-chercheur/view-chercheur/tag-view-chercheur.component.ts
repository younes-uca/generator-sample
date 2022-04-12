import {Component, OnInit} from '@angular/core';
import {TagService} from '../../../../../controller/service/Tag.service';
import {TagVo} from '../../../../../controller/model/Tag.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-tag-view-chercheur',
  templateUrl: './tag-view-chercheur.component.html',
  styleUrls: ['./tag-view-chercheur.component.css']
})
export class TagViewChercheurComponent implements OnInit {


constructor(private tagService: TagService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewTagDialog  = false;
}

// getters and setters

get tags(): Array<TagVo> {
    return this.tagService.tags;
       }
set tags(value: Array<TagVo>) {
        this.tagService.tags = value;
       }

 get selectedTag():TagVo {
           return this.tagService.selectedTag;
       }
    set selectedTag(value: TagVo) {
        this.tagService.selectedTag = value;
       }

   get viewTagDialog():boolean {
           return this.tagService.viewTagDialog;

       }
    set viewTagDialog(value: boolean) {
        this.tagService.viewTagDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
