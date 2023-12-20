import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn } from "typeorm";
import { Store } from "./Store";
@Entity()
export class Product extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  name: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @ManyToOne(() => Store, (store) => store.product)
  @JoinColumn({ name: 'store', referencedColumnName: 'name' })
  store: Store
}
