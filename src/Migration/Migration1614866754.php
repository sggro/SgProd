<?php declare(strict_types=1);

namespace Sg\ProdConfigurator\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1614866754 extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1614866754;
    }

    public function update(Connection $connection): void
    {
        $connection->executeUpdate(
            'CREATE TABLE IF NOT EXISTS `sg_prod_flow` (
                  `id` BINARY(16) NOT NULL,
                  `name` VARCHAR(255) NOT NULL,
                  `created_at` DATETIME(3) NOT NULL,
                  `updated_at` DATETIME(3) NULL,
                  PRIMARY KEY(`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ');

        $connection->executeUpdate('CREATE TABLE IF NOT EXISTS `sg_prod_configuration` (
        `id` BINARY(16) NOT NULL,
        `sg_prod_flow_id` BINARY(16) NULL,
        `name` VARCHAR(255) NOT NULL,
        `created_at` DATETIME(3) NOT NULL,
        `updated_at` DATETIME(3) NULL,
        PRIMARY KEY(`id`),
        CONSTRAINT `fk.sg_prod_configuration.sg_prod_flow_id` FOREIGN KEY (`sg_prod_flow_id`)
        REFERENCES `sg_prod_flow` (`id`)
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
          ');

        $connection->executeUpdate('
            ALTER TABLE `product`
                    ADD COLUMN `sg_prod_configuration_id` BINARY(16) NULL
                    ');
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
