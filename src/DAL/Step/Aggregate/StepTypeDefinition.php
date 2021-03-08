<?php declare(strict_types=1);

namespace Sg\ProdConfigurator\DAL\Step\Aggregate;

use Sg\ProdConfigurator\DAL\Step\StepDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\ReverseInherited;
use Shopware\Core\Framework\DataAbstractionLayer\Field\OneToManyAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;

class StepTypeDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'sg_prod_step_type';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new PrimaryKey(), new Required()),
            (new StringField('technical_name', 'technicalName'))->addFlags(new Required()),
            (new StringField('label', 'label'))->addFlags(new Required()),
            (new StringField('template', 'template'))->addFlags(new Required()),
            (new OneToManyAssociationField('steps', StepDefinition::class, 'step_type_id', 'id'))
                ->addFlags(new ReverseInherited('stepType'))
        ]);
    }

}
