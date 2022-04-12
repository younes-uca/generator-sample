import {TagVo} from './Tag.model';
import {CommandeVo} from './Commande.model';



export class CommandeTagVo {

    public id: number;

    public archive: boolean;
    public dateArchivage: Date;
                public dateArchivageMax: string ;
                public dateArchivageMin: string ;
      public commandeVo: CommandeVo ;
      public tagVo: TagVo ;

}
