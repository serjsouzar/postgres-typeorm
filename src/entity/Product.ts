import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  value: number;
}
