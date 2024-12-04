import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LanguagesAttributes {
    id?: number;
    name?: string;
    isoCode?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "languages",
	timestamps: false 
})
export class Languages extends Model<LanguagesAttributes, LanguagesAttributes> implements LanguagesAttributes {

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
    	field: "iso_code",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	isoCode?: string;

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