const firstCharLowerCase = require("../firstCharLowerCase");
const interfaceConst = "interface";

module.exports = (componentName) => {
  const firstCharLowerComponentClassName = `${firstCharLowerCase(
    componentName
  )}`;
  return `import { classNames } from 'shared/lib/classNames/classNames';
    import { useTranslation } from 'react-i18next';
    import s from './${componentName}.module.scss';
    import { memo } from 'react';
    
    ${interfaceConst} ${componentName}Props {
        className?: string;
    }
    
    export const ${componentName} = memo((props: ${componentName}Props) => {
        const { className } = props;
        const { t } = useTranslation();
        
        return (
            <div className={classNames(s.${firstCharLowerComponentClassName}, {}, [className])}>
               
            </div>
        );
    });`;
};
