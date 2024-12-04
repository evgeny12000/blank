import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DomainsAttributes {
    id?: number;
    domainName?: string;
    lockKey?: string;
    workerId?: string;
    syncStatus?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "domains",
	timestamps: false 
})
export class Domains extends Model<DomainsAttributes, DomainsAttributes> implements DomainsAttributes {

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
    	field: "domain_name",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "domain_name",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	domainName?: string;

    @Column({
    	field: "lock_key",
    	allowNull: true,
    	type: DataType.STRING(50) 
    })
    @Index({
    	name: "lock_key",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	lockKey?: string;

    @Column({
    	field: "worker_id",
    	allowNull: true,
    	type: DataType.STRING(50) 
    })
    	workerId?: string;

    @Column({
    	field: "sync_status",
    	allowNull: true,
    	type: DataType.ENUM('ready_to_start','inprogress','done'),
    	defaultValue: "ready_to_start" 
    })
    	syncStatus?: string;

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