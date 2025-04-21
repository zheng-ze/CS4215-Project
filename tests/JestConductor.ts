import { Chunk, RunnerStatus } from "conductor/dist/conductor/types";

import { ConductorError } from "conductor/dist/common/errors";
import { IModulePlugin } from "conductor/dist/conductor/module";
import { IPlugin } from "conductor/dist/conduit";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { ModuleClass } from "conductor/dist/conductor/module/types/ModuleClass";
import { PluginClass } from "conductor/dist/conduit/types/PluginClass";
import { readFileSync } from "fs";

export class JestConductor implements IRunnerPlugin {
  outputs: string[] = [];
  constructor() {}
  requestFile(fileName: string): Promise<string | undefined> {
    // Open and Read the test file into a string
    const testFile = readFileSync(fileName, "utf-8");
    // Return the file content
    return Promise.resolve(testFile);
  }
  requestChunk(): Promise<Chunk> {
    throw new Error("Method not implemented.");
  }
  requestInput(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  tryRequestInput(): string | undefined {
    throw new Error("Method not implemented.");
  }
  sendError(error: ConductorError): void {
    throw new Error("Method not implemented.");
  }
  updateStatus(status: RunnerStatus, isActive: boolean): void {
    throw new Error("Method not implemented.");
  }
  hostLoadPlugin(pluginName: string): void {
    throw new Error("Method not implemented.");
  }
  registerPlugin<Arg extends any[], T extends IPlugin>(
    pluginClass: PluginClass<Arg, T>,
    ...arg: Arg
  ): NoInfer<T> {
    throw new Error("Method not implemented.");
  }
  unregisterPlugin(plugin: IPlugin): void {
    throw new Error("Method not implemented.");
  }
  registerModule<T extends IModulePlugin>(moduleClass: ModuleClass<T>): T {
    throw new Error("Method not implemented.");
  }
  unregisterModule(module: IModulePlugin): void {
    throw new Error("Method not implemented.");
  }
  importAndRegisterExternalPlugin(location: string): Promise<IPlugin> {
    throw new Error("Method not implemented.");
  }
  importAndRegisterExternalModule(location: string): Promise<IModulePlugin> {
    throw new Error("Method not implemented.");
  }
  name?: string;
  destroy?(): void {
    throw new Error("Method not implemented.");
  }

  // Implement the required methods from IRunnerPlugin
  sendOutput(message: string): void {
    this.outputs.push(message);
  }
}
