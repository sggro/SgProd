<?php declare(strict_types=1);

namespace Sg\ProdConfigurator\DAL\Step;

use Sg\ProdConfigurator\DAL\Step\Aggregate\StepTypeDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Inherited;
use Shopware\Core\Framework\DataAbstractionLayer\Field\LongTextField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;

class StepDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'sg_step';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new PrimaryKey(), new Required()),
            new FkField('step_type_id', 'stepTypeId', StepTypeDefinition::class),
            (new StringField('technical_name', 'technicalName'))->addFlags(new Required()),
            (new StringField('label', 'label'))->addFlags(new Required()),
            new LongTextField('description', 'description'),
            (new ManyToOneAssociationField('stepType', 'step_type_id', StepTypeDefinition::class, 'id'))
                ->addFlags(new Inherited())
            ]);
    }

}
