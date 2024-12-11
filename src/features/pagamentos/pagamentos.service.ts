import { Injectable } from '@nestjs/common';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';

@Injectable()
export class PagamentosService {
  create(createPagamentoDto: CreatePagamentoDto) {
    return 'This action adds a new pagamento';
  }

  findAll() {
    return `This action returns all pagamentos`;
  }

  findOne(id: string) {
    return `This action returns a #${id} pagamento`;
  }

  update(id: string, updatePagamentoDto: UpdatePagamentoDto) {
    return `This action updates a #${id} pagamento`;
  }

  remove(id: string) {
    return `This action removes a #${id} pagamento`;
  }
}
