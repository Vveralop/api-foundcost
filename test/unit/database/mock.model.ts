export abstract class MockModel<T> {
  protected abstract fundStub: T;

  constructor(createfundData: T) {
    this.constructorSpy(createfundData);
  }

  constructorSpy(_createfundData: T): void {}

  async findById(): Promise<T> {
    return this.fundStub;
  }

  async find(): Promise<T[]> {
    return [this.fundStub];
  }

  async save(): Promise<T> {
    return this.fundStub;
  }

  async findOneAndUpdate(): Promise<T> {
    return this.fundStub;
  }

  async findOneAndDelete(): Promise<T> {
    return this.fundStub;
  }
}
