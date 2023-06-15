export const FundDtoStub = () => {
  return {
    curveSetName: 'CF',
    curveSetConfig: {
      curva: '1',
      fecha: '2023-02-01',
    },
    bootstrapResults: {
      curves: [
        { date: '2023-04-01', value: 0.12123 },
        { date: '2023-05-01', value: 0.31231 },
      ],
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};
