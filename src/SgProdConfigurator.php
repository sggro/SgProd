<?php declare(strict_types=1);

namespace Sg\ProdConfigurator;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;

class SgProdConfigurator extends Plugin
{
    public function uninstall(UninstallContext $context): void
    {
        parent::uninstall($context);

        if ($context->keepUserData()) {
            return;
        }

        $connection = $this->container->get(Connection::class);
        $connection->executeUpdate('DROP TABLE IF EXISTS `sg_prod_configuration`');
        $connection->executeUpdate('DROP TABLE IF EXISTS `sg_prod_flow`');

        //$connection->executeUpdate('ALTER TABLE `product` ADD COLUMN `sg_prod_configuration_id`');

    }


}
