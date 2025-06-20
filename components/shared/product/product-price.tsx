import { cn } from '@/lib/utils'

const ProductPrice = ({ value, className }: { value: number; className?: string }) => {
  // Ensure two decimal places
  const stringValue = value.toFixed(2)
  // Get the int/float parts
  const [intPart, floatPart] = stringValue.split('.')

  return (
    <p className={cn('text-2xl', className)}>
      <span className="text-xs align-super">$</span>
      {intPart}
      <span className="text-xs align-super">.{floatPart}</span>
    </p>
  )
}
export default ProductPrice

// Usage example:
// <ProductPrice value={19.99} className="text-green-500" />
