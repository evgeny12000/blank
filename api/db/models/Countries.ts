import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CountriesAttributes {
    id?: number;
    name?: string;
    isoCode?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "countries",
	timestamps: false 
})
export class Countries extends Model<CountriesAttributes, CountriesAttributes> implements CountriesAttributes {

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
    	name?: string;

    @Column({
    	field: "iso_code",
    	allowNull: true,
    	type: DataType.STRING(50) 
    })
    	isoCode?: string;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: "now()" 
    })
    	createdAt?: Date;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: "now()" 
    })
    	updatedAt?: Date;

}