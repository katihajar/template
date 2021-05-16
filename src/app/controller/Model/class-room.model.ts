import {Prof} from './prof.model';
import {QuizClassRoom} from './quiz-class-room.model';
import {EtudiantClassRoom} from './etudiant-class-room.model';


export class ClassRoom {
  public  id: number ;
  public  libelle: string;
  public  description: number;
  public  responsable = new Prof();
  public  etudiantClassRoomList = new Array<EtudiantClassRoom>();
  public  quizClassRoomList = new Array<QuizClassRoom>();
}
