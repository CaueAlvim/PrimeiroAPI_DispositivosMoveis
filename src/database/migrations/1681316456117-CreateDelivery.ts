import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDelivery1681316456117 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        new Table({
            name: 'deliveries',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'idSale',
                    type: 'varchar',
                },
                {
                    name: 'dt_delivery',
                    type: 'date',
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
        })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
