<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import { PAGE_NAME } from "@/constants";
import Title from "@/components/common/title/Title.vue";
import Text from "@/components/common/text/Text.vue";
import { Separator } from "@/components/ui/separator";
import PoliticsContentWrapper from "@/components/views/politics/PoliticsContentWrapper.vue";

const title = useTitle();
title.value = `Polityka strony | ${PAGE_NAME}`;

const baseTextSize = "xl";
</script>

<template>
  <section class="flex flex-col">
    <Title order="h1">Polityka strony</Title>
    <Separator />
    <PoliticsContentWrapper title="Nasze Cele 🎯">
      <Text :size="baseTextSize">
        Udostępniamy narzędzie do monitorowania ofert pracy w sektorze IT i technologii, które ma charakter edukacyjny i niekomercyjny. Nasz
        projekt jest dedykowany wyłącznie do celów naukowych, nie generuje korzyści majątkowych, i nie służy do celów komercyjnych.
      </Text>
      <Text :size="baseTextSize">
        Naszym priorytetem jest upraszczanie procesu poszukiwania pracy, zbierając wszystkie dostępne oferty w jednym miejscu. Chcemy, aby
        kandydaci mieli pełny wgląd w rynek pracy. Nasza platforma jest zaprojektowana z myślą o użytkownikach, dostosowując się do ich
        dynamicznych potrzeb.
      </Text>
    </PoliticsContentWrapper>

    <PoliticsContentWrapper title="Zgodność z Prawem 📜">
      <Text :size="baseTextSize">
        Wszystkie dane zbierane w ramach naszej platformy są uzyskiwane w sposób legalny, zgodnie z obowiązującymi przepisami prawa, w tym
        Ustawą o ochronie baz danych z dnia 27 lipca 2001 r. (Dz. U. 2001 Nr 128 poz. 1402 z późn. zm.). Nasza działalność nie narusza praw
        autorskich ani praw do baz danych. Projekt ma na celu wyłącznie cele naukowe i badawcze, a wszystkie zebrane informacje są
        wykorzystywane zgodnie z ich przeznaczeniem edukacyjnym.
      </Text>
    </PoliticsContentWrapper>

    <PoliticsContentWrapper title="Najważniejsze Funkcje 🔧">
      <Text :size="baseTextSize">Zintegrowane Przeszukiwanie 🔍</Text>
      <Text :size="baseTextSize">
        Przeglądaj oferty pracy bez potrzeby przeskakiwania między różnymi portalami. Wszystkie oferty dostępne są w jednym miejscu, co
        zapobiega przegapieniu ważnych ogłoszeń.
      </Text>
    </PoliticsContentWrapper>
    <PoliticsContentWrapper title="Przejrzyste Dane 📊">
      <Text :size="baseTextSize"
        >Dostęp do kluczowych informacji takich jak stanowisko, wynagrodzenie, nazwa firmy, słowa kluczowe, data publikacji i status
        aktualności oferty.
      </Text>
    </PoliticsContentWrapper>

    <PoliticsContentWrapper title="Bezpośrednie Przekierowanie ➡️">
      <Text :size="baseTextSize"> Kliknij na ofertę, aby przejść bezpośrednio do oryginalnego portalu i uzyskać więcej informacji. </Text>
      <Text :size="baseTextSize"> Korzyści Dla Portalów Pracy</Text>
    </PoliticsContentWrapper>

    <PoliticsContentWrapper title="Zwiększona Widoczność 🌍">
      <Text :size="baseTextSize">Nasza platforma pozwala na dotarcie ofert do większej liczby kandydatów, zwiększając ich zasięg. </Text>
    </PoliticsContentWrapper>

    <PoliticsContentWrapper title="Lepsze Dopasowanie Kandydatów 👥">
      <Text :size="baseTextSize">
        Dzięki szerokiemu zasięgowi, oferty pracy przyciągają różnorodnych kandydatów z odpowiednimi umiejętnościami, co poprawia jakość
        aplikacji. Większa liczba wartościowych aplikacji prowadzi do większej satysfakcji pracodawców.
      </Text>
    </PoliticsContentWrapper>
    <PoliticsContentWrapper title="Informacje 🤝">
      <Text :size="baseTextSize">
        Nie jesteśmy konkurencją, a partnerem dla portali z ofertami pracy. Naszym celem jest wspieranie procesu rekrutacyjnego poprzez
        oferowanie jednego miejsca, które ułatwia dostęp do ofert i przyciąga szerszą grupę poszukujących pracy.
      </Text>
      <Text :size="baseTextSize">
        Nasze algorytmy efektywnie zbierają dane, minimalizując obciążenie źródłowych systemów. Aktualizacja ofert odbywa się regularnie.
      </Text>

      <Text :size="baseTextSize">Stosujemy limity zapytań, aby nie wpływać negatywnie na działanie stron z ofertami pracy. </Text>

      <Text :size="baseTextSize"> Zbieramy tylko niezbędne informacje o ofertach pracy, takie jak:</Text>
      <div class="flex flex-col gap-2">
        <Text :size="baseTextSize">- data publikacji,</Text>
        <Text :size="baseTextSize">- adres URL oferty,</Text>
        <Text :size="baseTextSize">- tytuł stanowiska,</Text>
        <Text :size="baseTextSize">- nazwa firmy,</Text>
        <Text :size="baseTextSize">- lokalizacja, </Text>
        <Text :size="baseTextSize">- typ umowy,</Text>
        <Text :size="baseTextSize">- oferowane wynagrodzenie,</Text>
        <Text :size="baseTextSize">- tryb pracy (zdalna/hybrydowa/stacjonarna),</Text>
        <Text :size="baseTextSize">- wymagane doświadczenie,</Text>
        <Text :size="baseTextSize">- technologie i słowa kluczowe.</Text>
      </div>
      <Text :size="baseTextSize">
        Nie pobieramy obrazów ani treści chronionych prawami autorskimi. Jeśli znajdziesz takie dane na naszej stronie, prosimy o kontakt,
        abyśmy mogli je natychmiast usunąć.
      </Text>
      <Text :size="baseTextSize">
        Twoje opinie są dla nas kluczowe! Zgłaszaj problemy i podziel się swoimi pomysłami. Razem możemy uprościć proces poszukiwania pracy
        i uczynić go bardziej transparentnym i przyjaznym! 🌟
      </Text>
    </PoliticsContentWrapper>
  </section>
</template>
