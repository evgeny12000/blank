import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ProductsAttributes {
    id?: number;
    title?: string;
    image?: string;
    createdat?: Date;
    updatedat?: Date;
}

@Table({
	tableName: "products",
	timestamps: false 
})
export class Products extends Model<ProductsAttributes, ProductsAttributes> implements ProductsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PRIMARY",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(50) 
    })
    	title?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(50) 
    })
    	image?: string;

    @Column({
    	field: "createdAt",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	createdat?: Date;

    @Column({
    	field: "updatedAt",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	updatedat?: Date;

}