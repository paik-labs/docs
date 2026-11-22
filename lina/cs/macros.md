# Makra

LINA má dvě makra, která můžete vložit na libovolnou stránku. Obě jen ukazují informace: proces nikdy nespustí, neposunou ani neukončí.

Makro vložíte tak, že stránku upravíte, napíšete `/LINA` a makro vyberete. Nastavení změníte tak, že makro vyberete a kliknete na ikonu tužky.

## LINA process history

Ukazuje historii procesu na stránce, kde makro je — stejné záznamy jako **Ukázat historii** v odznaku vedle názvu: kdo co kdy udělal, s odkazy na tickety v Jiře.

| Nastavení | Volby |
|---|---|
| **Běhy** | **Poslední běh** (výchozí) nebo **Všechny běhy na stránce** |
| **Kroky** | **Jen důležité kroky** (výchozí) nebo **Všechny kroky** (průchody čarami, dosažení konce) |
| **Řádků na stránku** | 10, 25 nebo 50; **Další** načte starší záznamy |

Čtenář si může sám zaškrtnout **Ukázat každý krok (průchody čarami, dosažení konce)**. Na stránce bez procesu makro napíše *Na této stránce zatím žádný proces neběžel.* Kopie stránky ukáže prázdnou historii, protože kopie proces nepřebírá.

## LINA documents

Vypíše stránky s procesem LINA — například všechny platné směrnice prostoru, nebo všechno, co je ještě v kontrole pod stránkou příručky.

| Nastavení | Volby |
|---|---|
| **Kde** | **Tento prostor (nebo prostor níže)**, **Stránky pod touto stránkou**, **Stránky pod jinou stránkou**, **Celý site** |
| **Klíč prostoru (prázdné = tento prostor)** | jiný prostor, například `HR` |
| **ID stránky nebo odkaz (pro „Stránky pod jinou stránkou“)** | vložte odkaz na stránku nebo její ID |
| **Stav dokumentu** | **Jakýkoli**, **Rozpracovaný**, **Platný**, **Neplatný** — [skupina](document-states.md) stavu |
| **Proces** | **Běžící i skončené**, nebo **Jen běžící** |
| **Název procesu (přesně; prázdné = jakýkoli)** | název šablony přesně tak, jak je napsaný |

Sloupce: dokument, prostor (u celého site), stav, proces · figura, kde běh je (nebo *skončil*), a od kdy.

### Kdo co vidí

Seznam se hledá jako člověk, který stránku čte. *Stránky, které číst nesmí, se nevypíšou* — dva čtenáři tak mohou na stejné stránce vidět různé seznamy. Počet skrytých stránek se neukazuje.

### Dobré vědět

- Seznam pochází z hledání Confluence nad stavem, který LINA zapisuje ke každé stránce ([Hledání dokumentů podle stavu](find-documents-by-state.md)). Po změně se může projevit až za minutu dvě.
- Stránky, jejichž proces se od této verze LINA nezměnil, ukazují místo procesu a figury jen „—“ a **Jen běžící** je zatím nenajde. Objeví se po svém dalším kroku.
- Termíny a tickety v Jiře v tomto makru nejsou. Na ty použijte [přehled prostoru](space-overview.md).
