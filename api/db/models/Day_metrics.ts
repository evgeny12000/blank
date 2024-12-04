import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface Day_metricsAttributes {
    id?: number;
    metricDate?: string;
    domainName?: string;
    language?: string;
    country?: string;
    clicks?: number;
    hits?: number;
    workerId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "day_metrics",
	timestamps: false 
})
export class Day_metrics extends Model<Day_metricsAttributes, Day_metricsAttributes> implements Day_metricsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "PRIMARY",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "metric_date",
    	allowNull: true,
    	type: DataType.DATEONLY 
    })
    @Index({
    	name: "metric_date_domain_name_language_country",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	metricDate?: string;

    @Column({
    	field: "domain_name",
    	allowNull: true,
    	type: DataType.STRING(50) 
    })
    @Index({
    	name: "metric_date_domain_name_language_country",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	domainName?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(5) 
    })
    @Index({
    	name: "metric_date_domain_name_language_country",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	language?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(5) 
    })
    @Index({
    	name: "metric_date_domain_name_language_country",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	country?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: "0" 
    })
    	clicks?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: "0" 
    })
    	hits?: number;

    @Column({
    	field: "worker_id",
    	allowNull: true,
    	type: DataType.STRING(50) 
    })
    @Index({
    	name: "worker_id",
    	using: "BTREE",
    	order: "ASC",
    	unique: false 
    })
    	workerId?: string;

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