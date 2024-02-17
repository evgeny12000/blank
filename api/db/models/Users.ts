import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface UsersAttributes {
    id?: number;
    name?: string;
    type?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "users",
	timestamps: false 
})
export class Users extends Model<UsersAttributes, UsersAttributes> implements UsersAttributes {

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
    	type: DataType.STRING(255) 
    })
    	name?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	type?: string;

    @Column({
    	field: "created_at",
    	type: DataType.DATE,
    	defaultValue: "now()" 
    })
    	createdAt?: Date;

    @Column({
    	field: "updated_at",
    	type: DataType.DATE,
    	defaultValue: "now()" 
    })
    	updatedAt?: Date;

}