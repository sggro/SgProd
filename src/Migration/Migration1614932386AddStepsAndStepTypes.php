<?php declare(strict_types=1);

namespace Sg\ProdConfigurator\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1614932386AddStepsAndStepTypes extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1614932386;
    }

    public function update(Connection $connection): void
    {
        $connection->executeUpdate('CREATE TABLE IF NOT EXISTS `sg_step_type` (
            `id` BINARY(16) NOT NULL,
            `technical_name` VARCHAR(255) NOT NULL,
            `label` VARCHAR(255) NOT NULL,
            `template` VARCHAR(255) NOT NULL,
            `created_at` DATETIME(3) NOT NULL,
            `updated_at` DATETIME(3) NULL,
            PRIMARY KEY(`id`)
        ) ENGINE=InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
          ');

        $connection->executeUpdate('
            CREATE TABLE IF NOT EXISTS `sg_step` (
                `id` BINARY(16) NOT NULL,
                `step_type_id` BINARY(16) NOT NULL,
                `technical_name` VARCHAR(255) NOT NULL,
                `label` VARCHAR(255) NOT NULL,
                `description` LONGTEXT NULL,
                `created_at` DATETIME(3) NOT NULL,
                `updated_at` DATETIME(3) NULL,
                PRIMARY KEY(`id`),
                CONSTRAINT `fk.sg_step.step_type_id` FOREIGN KEY (`step_type_id`)
                REFERENCES `sg_step_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
          ');
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
