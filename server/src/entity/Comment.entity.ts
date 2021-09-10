import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {DogBreed} from "./DogBreed.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @ManyToOne(() => DogBreed, (dogBreedEntity) => dogBreedEntity.comment)
    breed: DogBreed;
}
