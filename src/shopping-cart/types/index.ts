import { ApiProperty } from '@nestjs/swagger';

class ShoppingCartItem {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Abscido cauda.' })
  name: string;

  @ApiProperty({ example: 2500 })
  price: number;

  @ApiProperty({
    example:
      'https://loremflickr.com/640/480/technics?random=260020099535856568489064353936',
  })
  image: string;

  @ApiProperty({ example: 'Azure' })
  parts_manufacturer: string;

  @ApiProperty({ example: 5 })
  in_stock: number;

  @ApiProperty({ example: 'Mazda' })
  boiler_manufacturer: string;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 3 })
  count: number;

  @ApiProperty({ example: 77777 })
  total_price: number;

  @ApiProperty({ example: '2024-06-11T04:34:05.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2024-06-11T04:34:05.000Z' })
  updatedAt: string;
}

export class GetAllResponse extends ShoppingCartItem {}
export class AddToCartResponse extends ShoppingCartItem {}
export class UpdateCountResponse extends ShoppingCartItem {
  @ApiProperty({ example: 1 })
  count: number;
}
export class UpdateCountRequest extends ShoppingCartItem {
  @ApiProperty({ example: 1 })
  count: number;
}

export class TotalPriceResponse extends ShoppingCartItem {
  @ApiProperty({ example: 777 })
  total_price: number;
}
export class TotalPriceRequest extends ShoppingCartItem {
  @ApiProperty({ example: 777 })
  total_price: number;
}
