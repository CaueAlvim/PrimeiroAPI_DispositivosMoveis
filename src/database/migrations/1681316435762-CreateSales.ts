import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSales1681316435762 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({
            name: 'sales',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'productId',
                    type: 'varchar',
                },
                {
                    name: 'userId',
                    type: 'varchar',
                },
                {
                    name: 'total',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'obs',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ],
//            foreignKeys: [
// 					{
// 						name: 'ProductID',
// 						referencedTableName: 'products',
// 						referencedColumnNames: ['id'],
// 						columnNames: ['productId'],
// 						onDelete: 'CASCADE',
// 						onUpdate: 'CASCADE',
// 					},
//                     {
//                        name: 'UserID',
//                        referencedTableName: 'userss',
//                        referencedColumnNames: ['id'],
//                        columnNames: ['userId'],
//                        onDelete: 'CASCADE',
//                        onUpdate: 'CASCADE',
//                    },
// 			],
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
