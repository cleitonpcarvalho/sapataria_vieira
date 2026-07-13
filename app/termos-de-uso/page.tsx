import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Termos de Uso | Sapataria Chrispim Vieira",
  description:
    "Termos de Uso do site institucional da Sapataria Chrispim Vieira.",
};

const lastUpdated = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "long",
  timeZone: "America/Fortaleza",
}).format(new Date());

export default function TermsOfUsePage() {
  return (
    <LegalDocument
      title="Termos de Uso"
      intro="Estes Termos de Uso regulam o acesso e a utilização do site institucional da Sapataria Chrispim Vieira."
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
          title: "2. Objeto",
          content: (
            <p>
              Este site tem finalidade institucional, apresentando os serviços
              da Sapataria Chrispim Vieira e facilitando o contato do cliente
              por canais como WhatsApp, telefone, e-mail e redes sociais.
            </p>
          ),
        },
        {
          title: "3. Condições de uso do site",
          content: (
            <p>
              As informações apresentadas no site têm caráter informativo.
              Orçamentos, prazos, condições de serviço e disponibilidade devem
              ser confirmados diretamente com a Sapataria Chrispim Vieira pelos
              canais oficiais de atendimento.
            </p>
          ),
        },
        {
          title: "4. Propriedade intelectual",
          content: (
            <p>
              Conteúdos, imagens, textos, identidade visual e demais elementos
              do site pertencem à Sapataria Chrispim Vieira ou são utilizados
              com autorização. O uso, reprodução ou distribuição não autorizada
              é proibido.
            </p>
          ),
        },
        {
          title: "5. Limitação de responsabilidade",
          content: (
            <p>
              A Sapataria Chrispim Vieira não se responsabiliza por uso indevido
              das informações do site por terceiros, por interpretações fora do
              contexto ou por decisões tomadas sem confirmação direta com a
              empresa.
            </p>
          ),
        },
        {
          title: "6. Comunicação via WhatsApp",
          content: (
            <p>
              A comunicação com clientes pode ocorrer por meio da API oficial do
              WhatsApp Business, operada pela Meta, estando também sujeita aos
              termos e políticas próprios da Meta e do WhatsApp.
            </p>
          ),
        },
        {
          title: "7. Contato do responsável",
          content: (
            <p>
              Para dúvidas sobre estes Termos de Uso, entre em contato pelo
              e-mail vieirasapataria@gmail.com.
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
