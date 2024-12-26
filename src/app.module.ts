import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuracaoPostgres from './configuracoes/postgres/conexao';
import { AutenticacaoModule } from './configuracoes/autenticacao/autenticacao.module';
import { PacientesModule } from './features/pacientes/pacientes.module';
import { TerapeutasModule } from './features/terapeutas/terapeutas.module';
import { ConsultasModule } from './features/consultas/consultas.module';
import { AdminsModule } from './features/admins/admins.module';
import { ReportsModule } from './features/reports/reports.module';
import { RatingsModule } from './features/ratings/ratings.module';
import { TagsModule } from './features/tags/tags.module';
import { NotificacoesModule } from './features/notificacoes/notificacoes.module';
import { PagamentosModule } from './features/pagamentos/pagamentos.module';
import { CartoesModule } from './features/cartoes/cartoes.module';
import { AnotacoesModule } from './features/anotacoes/anotacoes.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(configuracaoPostgres),
    AutenticacaoModule,
    PacientesModule,
    TerapeutasModule,
    ConsultasModule,
    AdminsModule,
    ReportsModule,
    RatingsModule,
    TagsModule,
    NotificacoesModule,
    PagamentosModule,
    CartoesModule,
    AnotacoesModule,
  ],
})
export class AppModule {}
