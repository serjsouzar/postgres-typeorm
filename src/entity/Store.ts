import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, JoinColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Store extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  name: string;

  @OneToMany(() => Product, (product:Product) => product.store)  
  product: Product[]
}
