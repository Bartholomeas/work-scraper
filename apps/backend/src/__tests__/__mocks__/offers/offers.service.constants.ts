import { mockCreatedAtDate, mockUUID } from "@/__tests__/__mocks__/mocks.constants";

export const deleteOutdatedRecordsMockResponse = 8;

export const updateWorkplacesCountsMockResponse = [
  {
    id: mockUUID,
    value: "toruń",
    city: "Toruń",
    address: null,
    count: 121,
  },
  {
    id: mockUUID,
    value: "warszawa",
    city: "Warszawa",
    address: "Wilanów",
    count: 4203,
  },
  {
    id: mockUUID,
    value: "kraków",
    city: "Kraków",
    address: null,
    count: 2018,
  },
];
export const updateCategoriesCountsMockResponse = [
  {
    id: mockUUID,
    value: "figma",
    count: 75,
  },
  {
    id: mockUUID,
    value: "html",
    count: 251,
  },
  {
    id: mockUUID,
    value: "css",
    count: 231,
  },
];

export const getJobOffersMockResponse = {
  createdAt: new Date(Date.now()),
  meta: {
    page: 1,
    perPage: 48,
    total: 7547,
    totalPages: 158,
    hasPrevPage: false,
    hasNextPage: true,
  },
  data: [
    {
      id: mockUUID,
      createdAt: mockCreatedAtDate,
      expirationDate: "2024-08-15T21:59:59.000Z",
      positionName: "Web Developer",
      companyName: "CALDENA Sp. z o.o. Sp. k.",
      dataSourceCode: "pracuj",
      company: {
        name: "CALDENA Sp. z o.o. Sp. k.",
      },
      workplaces: [
        {
          value: "toruń",
          city: "Toruń",
          address: null,
        },
        {
          value: "warszawa",
          city: "Warszawa",
          address: "Wilanów",
        },
      ],
      workModes: ["stationary"],
      contractTypes: ["uop"],
      technologies: ["php", "css", "html", "figma", "sql", "java"],
      workSchedules: ["full-time"],
      positionLevels: ["mid"],
      salaryRange: [],
      offerUrls: [
        "https://www.pracuj.pl/praca/web-developer-torun,oferta,1003475729",
        "https://www.pracuj.pl/praca/web-developer-warszawa-franciszka-klimczaka-1,oferta,1003475728",
      ],
    },
    {
      id: mockUUID,
      createdAt: mockCreatedAtDate,
      expirationDate: "2024-08-15T21:59:59.000Z",
      positionName: "Pracownik ds. wsparcia klienta zagranicznego ze znajomością języków obcych",
      companyName: "CPL Jobs .",
      dataSourceCode: "pracuj",
      company: {
        name: "CPL Jobs .",
      },
      workplaces: [
        {
          value: "łódź",
          city: "Łódź",
          address: null,
        },
        {
          value: "warszawa",
          city: "Warszawa",
          address: "Wilanów",
        },
        {
          value: "kraków",
          city: "Kraków",
          address: null,
        },
      ],
      workModes: ["hybrid"],
      contractTypes: ["uop"],
      technologies: [],
      workSchedules: ["full-time"],
      positionLevels: ["junior", "mid"],
      salaryRange: [],
      offerUrls: [
        "https://www.pracuj.pl/praca/pracownik-ds-wsparcia-klienta-zagranicznego-ze-znajomoscia-jezykow-obcych-krakow,oferta,1003475721",
        "https://www.pracuj.pl/praca/pracownik-ds-wsparcia-klienta-zagranicznego-ze-znajomoscia-jezykow-obcych-lodz,oferta,1003475720",
        "https://www.pracuj.pl/praca/pracownik-ds-wsparcia-klienta-zagranicznego-ze-znajomoscia-jezykow-obcych-warszawa,oferta,1003475719",
      ],
    },
  ],
};
