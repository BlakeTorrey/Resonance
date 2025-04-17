import { ArtistProviderAdapter } from "@/domain/providers/artist/artist.provider.adapter";
import { UserProviderAdapter } from "@/domain/providers/user/user.provider.adapter";
import { DependencyContainer } from "tsyringe";

export function setupProviderDepencyInjection(container: DependencyContainer): void {
    container.register('UserProviderPort', {
        useClass: UserProviderAdapter,
    })

    container.register('ArtistProviderPort', {
        useClass: ArtistProviderAdapter,
    })
}