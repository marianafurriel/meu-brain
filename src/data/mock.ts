// src/data/mockDashboard.ts

export interface Metric {
    id: string;
    code: string;
    label: string;
    value: string | number;
    subtitle: string;
    badge?: string;
    hasGraph?: boolean;
    progressPercent?: number;
  }
  
  export interface ReadingItem {
    id: string;
    source: string;
    author: string;
    title: string;
    tags: string[];
    remainingTime: string;
    progressLabel: string;
    progressPercentage: number;
    progressColor?: string;
    footerText: string;
  }
  
  export interface TaskItem {
    id: string;
    title: string;
    reference?: string;
    priority?: 'Alta' | 'Média' | 'Baixa';
    dueDate?: string;
    status: 'Em andamento' | 'Pendente' | 'Concluído';
    completedAt?: string;
  }
  
  export const mockDashboardData = {
    // 1. MÉTRICAS DO TOPO
    metrics: [
      {
        id: 'm1',
        code: '01 // REPOSITÓRIO',
        label: 'REPOSITÓRIO',
        value: '48',
        subtitle: 'Artigos arquivados',
        hasGraph: true,
      },
      {
        id: 'm2',
        code: '02 // LEITURA VIVA',
        label: 'LEITURA VIVA',
        value: '06',
        subtitle: 'Em andamento',
        badge: '+2 esta sem.',
      },
      {
        id: 'm3',
        code: '03 // ABSORVIDOS',
        label: 'ABSORVIDOS',
        value: '14',
        subtitle: 'Concluídos este mês',
        progressPercent: 75,
      },
      {
        id: 'm4',
        code: '04 // NEURÔNIOS',
        label: 'NEURÔNIOS',
        value: '09',
        subtitle: 'Ideias em rascunho',
        badge: '3 prontas',
      },
    ] as Metric[],
  
    // 2. LEITURAS EM ANDAMENTO (6 ativas)
    readings: [
      {
        id: 'r1',
        source: 'MIT Press',
        author: 'Andy Clark',
        title: 'The Experience Machine: How Our Mind Predicts Reality',
        tags: ['Neurociência', 'Filosofia da Mente'],
        remainingTime: '~18 min rest.',
        progressLabel: 'Progresso cap. 5',
        progressPercentage: 68,
        progressColor: '#f97316', // Laranja
        footerText: 'Última nota há 2h',
      },
      {
        id: 'r2',
        source: 'Martin Fowler',
        author: 'IEEE Software',
        title: 'Patterns of Distributed Systems: State Machine Replication',
        tags: ['Engenharia de Software', 'Arquitetura'],
        remainingTime: '~34 min rest.',
        progressLabel: 'Seção: Consenso Paxos',
        progressPercentage: 42,
        progressColor: '#60a5fa', // Azul
        footerText: 'Última nota ontem',
      },
      {
        id: 'r3',
        source: 'Stanford Encyclopedia',
        author: 'David Chalmers',
        title: 'Facing Up to the Hard Problem of Consciousness',
        tags: ['Epistemologia', 'Fenomenologia'],
        remainingTime: '~12 min rest.',
        progressLabel: 'Conclusão Argumentativa',
        progressPercentage: 85,
        progressColor: '#34d399', // Verde
        footerText: '5 destaques marcados',
      },
      {
        id: 'r4',
        source: 'Paul Graham',
        author: 'Essays',
        title: 'How to Do Great Work: Structure, Novelty & Discipline',
        tags: ['Metodologia', 'Criatividade'],
        remainingTime: '~25 min rest.',
        progressLabel: 'Princípios de Curiosidade',
        progressPercentage: 19,
        progressColor: '#f59e0b', // Âmbar
        footerText: 'Iniciado esta manhã',
      },
    ] as ReadingItem[],
  
    // 3. TAREFAS PARA HOJE (3 restantes + 1 concluída)
    tasks: [
      {
        id: 't1',
        title: 'Escrever nota perene sobre Processamento Preditivo',
        reference: 'Ref: The Experience Machine (Cap. 4)',
        priority: 'Alta',
        dueDate: 'Hoje, 14:00',
        status: 'Em andamento',
      },
      {
        id: 't2',
        title: 'Mapear diagrama de consenso Paxos vs Raft',
        reference: 'Ref: Patterns of Distributed Systems',
        priority: 'Média',
        dueDate: 'Hoje, 17:30',
        status: 'Pendente',
      },
      {
        id: 't3',
        title: 'Exportar 12 flashcards de Filosofia da Mente para Anki',
        reference: 'Ref: David Chalmers Paper',
        priority: 'Baixa',
        dueDate: 'Hoje, 20:00',
        status: 'Pendente',
      },
      {
        id: 't4',
        title: "Revisar highlights de 'How to Do Great Work'",
        status: 'Concluído',
        completedAt: 'Concluído às 07:45',
      },
    ] as TaskItem[],
  };