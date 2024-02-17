import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

interface ProductCreationAttrs {
  title: string;
  image: string;
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreationAttrs> {
  @Column({ type: DataType.STRING })
  title: string;

  @Column({ type: DataType.STRING })
  image: string;

}
