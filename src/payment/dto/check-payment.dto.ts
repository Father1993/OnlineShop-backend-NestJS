import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CheckPaymentDto {
  @ApiProperty({ example: '22ee12f66-00f-5000-8000-18db351245c7' })
  @IsNotEmpty()
  readonly paymentId: number;
}
