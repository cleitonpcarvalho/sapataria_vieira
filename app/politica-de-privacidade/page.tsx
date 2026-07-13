import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Política de Privacidade | Sapataria Chrispim Vieira",
  description:
    "Política de Privacidade da Sapataria Chrispim Vieira, conforme a LGPD.",
};

const lastUpdated = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "long",
  timeZone: "America/Fortaleza",
}).format(new Date());

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Política de Privacidade"
      intro="Esta Política de Privacidade explica, de forma clara, como a Sapataria Chrispim Vieira trata dados pessoais recebidos por meio do site, WhatsApp e canais de atendimento."
      sections={[
        {
          title: "1. Identificação da empresa",
          content: (
            <p>
              A. R. C. VIEIRA & CIA LTDA – ME, nome fantasia Sapataria
              Chrispim Vieira, inscrita no CNPJ sob nº 44.556.594/0001-97, com
              endereço na Rua dos Holandeses, 6, Pavimento Inferior, Parque
              Nova Suíça, Valinhos/SP, CEP 13271-423.
            </p>
          ),
        },
        {
          title: "2. Dados coletados",
          content: (
            <p>
              Podemos coletar nome, telefone e mensagens trocadas via WhatsApp
              e sistema de atendimento Chatwoot, sempre relacionados ao
              atendimento, orçamento ou acompanhamento de serviços solicitados.
            </p>
          ),
        },
        {
          title: "3. Finalidade do uso dos dados",
          content: (
            <p>
              Os dados são utilizados para atendimento ao cliente, envio de
              avisos sobre status de ordens de serviço, elaboração de
              orçamentos, esclarecimento de dúvidas e continuidade do
              relacionamento iniciado pelo próprio cliente.
            </p>
          ),
        },
        {
          title: "4. Base legal",
          content: (
            <p>
              O tratamento dos dados pessoais observa a Lei Geral de Proteção de
              Dados, Lei nº 13.709/2018, especialmente quando necessário para
              execução de procedimentos preliminares, atendimento de legítimo
              interesse e cumprimento de obrigações legais aplicáveis.
            </p>
          ),
        },
        {
          title: "5. Retenção e compartilhamento de dados",
          content: (
            <>
              <p>
                As informações são mantidas pelo período necessário para
                atendimento, histórico de ordens de serviço, obrigações legais e
                proteção de direitos da empresa e do cliente.
              </p>
              <p>
                A comunicação via WhatsApp utiliza a API oficial do WhatsApp
                Business, Cloud API, operada pela Meta, que atua como
                processadora dos dados nessas trocas. Também poderemos utilizar
                o Chatwoot para organização do atendimento.
              </p>
            </>
          ),
        },
        {
          title: "6. Direitos do titular dos dados",
          content: (
            <p>
              O titular pode solicitar acesso, correção, exclusão ou informações
              sobre o tratamento dos seus dados, conforme previsto na LGPD. Para
              exercer esses direitos, entre em contato pelo e-mail
              vieirasapataria@gmail.com.
            </p>
          ),
        },
        {
          title: "7. Contato do responsável",
          content: (
            <p>
              Para dúvidas sobre esta Política de Privacidade ou sobre o
              tratamento de dados pessoais, escreva para
              vieirasapataria@gmail.com.
            </p>
          ),
        },
        {
          title: "8. Última atualização",
          content: <p>{lastUpdated}.</p>,
        },
      ]}
    />
  );
}
