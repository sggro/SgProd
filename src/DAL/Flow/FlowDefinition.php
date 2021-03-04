<?php declare(strict_types=1);

namespace Sg\ProdConfigurator\DAL\Flow;

use Sg\ProdConfigurator\DAL\Configuration\ConfigurationDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\OneToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;

class FlowDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'sg_prod_flow';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new PrimaryKey(), new Required()),
            (new StringField('name', 'name'))->addFlags(new Required()),
            //(new FkField('sg_prod_flow_id', 'flowId', FlowDefinition::class))->addFlags(new Required()),
            new OneToOneAssociationField('configuration', 'id', 'sg_prod_flow_id', ConfigurationDefinition::class)
        ]);
    }
}
