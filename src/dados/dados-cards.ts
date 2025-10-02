

export type cardsModal  = {
        id:string
        titulo:string
        descricao:string
        titulo2?:string
        topico1?:string
        topico2?:string
        topico3?:string
        topico4?:string
        topico5?:string
        topico6?:string
        topico1_1?:string
        topico1_2?:string
        topico1_3?:string
        topico1_4?:string

}


export const dados_cards: cardsModal[] = [ 
    {
        id: '1',
        titulo: 'Depressão',
        descricao: 'É um transtorno de saúde mental sério e comum que causa mudanças persistentes no humor, como tristeza profunda, irritabilidade e perda de interesse em atividades prazerosas, afetando a capacidade de funcionar no dia a dia.',
        
        titulo2: 'Os sintomas da depressão variam de intensidade e tipo, mas podem incluir:',
        topico1: 'Humor: Tristeza persistente, sensação de vazio, desesperança, pessimismo, baixa autoestima e culpa excessiva.',
        topico2: 'Perda de Interesse: Desinteresse ou falta de prazer em atividades que antes eram agradáveis.',
        topico3: 'Alterações Físicas: Fadiga, falta de energia, alterações no apetite e no sono (insônia ou sonolência excessiva), e dores e outros sintomas físicos difusos.  ',
        topico4: 'Pensamentos: Ideias sobre morte ou suicídio, que podem surgir como um desejo de fim do sofrimento ou por se sentirem um peso para os outro ',
        topico5: 'Dificuldades Cognitivas: Problemas de concentração, falta de memória, lentificação do pensamento, indecisão.'
        
    } ,
     {
        id: '2',
        titulo: 'Ansiedade',
        descricao: 'A ansiedade é uma emoção humana natural de apreensão ou medo em relação ao futuro ou a uma ameaça, funcionando como um mecanismo de alerta e proteção. Torna-se um problema quando exagerada e persistente, manifestando-se como um transtorno que interfere no funcionamento diário e na qualidade de vida.',
        
        titulo2: 'Os sintomas podem ser psicológicos ou físicos: ',
        topico1: 'Psicológicos: Preocupação excessiva e incontrolável, inquietação, tensão, dificuldade em relaxar, medo intenso, sensação de perigo iminente.  ',
        topico2: 'Físicos: Palpitações cardíacas, falta de ar, tremores, suores, tontura, tensão muscular, dores no corpo. ',
    },
     {
        id: '3',
        titulo: 'TDAH',
        descricao: ' Transtorno do Déficit de Atenção e Hiperatividade, é um transtorno do neurodesenvolvimento que se manifesta como dificuldade em manter a atenção, agitação, impulsividade ou uma combinação destes.',
        
        titulo2:'Características Principais ',
        topico1:'Desatenção: Dificuldade em manter o foco em atividades, completar tarefas e organizar-se.  ',
        topico2:'Hiperatividade: Agitação, inquietação e dificuldade em ficar sentado ou parado.  ',
        topico3:'Impulsividade: Dificuldade em esperar a vez, interrupção frequente de conversas e respostas rápidas. ',
    
    },
     {
        id: '4',
        titulo: 'Esquizofrenia',
        descricao: 'A esquizofrenia é um transtorno mental crônico e grave que afeta o pensamento, as emoções e o comportamento, causando perda de contato com a realidade (psicose).',
        
        titulo2:'Sintomas principais: ',
        topico1_1:'Sintomas positivos (psicose): ',
            topico1:'Alucinações: Percepções sensoriais que não correspondem a um estímulo real, como ouvir vozes.  ',
            topico2:'Delírios: Crenças falsas e irredutíveis, como a crença de estar sendo perseguido.  ',
            topico3:'Pensamento e fala desorganizados: Dificuldade em organizar ideias, o que pode tornar o discurso confuso.  ',
        topico1_2:'Sintomas negativos: ',
            topico4:'Falta de motivação: Diminuição do interesse em atividades e na interação social.  ',
            topico5:'Embotamento afetivo: Redução na expressão de emoções.  ',
            topico6:'Dificuldade de raciocínio e concentração: Problemas cognitivos que dificultam o aprendizado e a atenção. '
    },
     {
        id: '5',
        titulo: 'Transtorno Alimentar',
        descricao: 'Os transtornos alimentares são condições psiquiátricas caracterizadas por alterações persistentes nas refeições ou em comportamentos relacionados aos hábitos alimentares.',
        
        titulo2:'Os sintomas de transtornos alimentares incluem:  ',
        topico1:'Comportamentais: Restrição alimentar severa, compulsão por comida, vômitos autoinduzidos, uso de laxantes e prática de exercícios físicos de forma excessiva. ',
        topico2:'Físicos: Flutuações de peso significativas e repentinas, ou manutenção de um peso anormalmente baixo. Problemas como tontura, pele seca e queda de cabelo também podem ocorrer.',
        topico3:'Psicológicos: Medo intenso de engordar, percepção distorcida da própria imagem corporal, baixa autoestima, ansiedade e depressão. ',
        topico4:'Sociais: Evasão de eventos sociais que envolvam alimentação. ',
        
    
    },
     {
        id: '6',
        titulo: 'TOC',
        descricao: 'É um distúrbio psiquiátrico caracterizado pela presença de obsessões, que são pensamentos, imagens ou impulsos intrusivos e indesejados, e compulsões, que são comportamentos repetitivos ou atos mentais que a pessoa se sente compelida a realizar para aliviar a ansiedade causada pelas obsessões.',
        
        topico1_1:'Obsessões:  ',
            topico1:'Pensamentos, imagens ou impulsos indesejados e recorrentes que causam ansiedade e angústia. ',
            topico2:'Exemplos comuns: medo de contaminação, dúvidas sobre ter feito algo (como trancar a porta), pensamentos intrusivos de violência ou sexo. ',
        topico1_3:'Compulsões:',
            topico3:'Comportamentos ou rituais mentais repetitivos realizados para aliviar a ansiedade causada pelas obsessões. ',
            topico4:'Exemplos comuns: lavar as mãos excessivamente, checar repetidamente, organizar objetos de forma específica ou contar.  ',
        topico1_4:'Prejuízo na vida diária:',
            topico5:'As obsessões e compulsões consomem tempo e energia significativos, atrapalhando a rotina, o trabalho e as relações sociais. ',
            topico6:'O sofrimento e a ansiedade são intensos, levando a um ciclo vicioso de pensamentos e comportamentos.'
    
    }
]