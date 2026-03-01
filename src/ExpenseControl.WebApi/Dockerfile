FROM mcr.microsoft.com/dotnet/aspnet:10.0.3 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:10.0.102 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["src/ExpenseControl.WebApi/ExpenseControl.WebApi.csproj", "src/ExpenseControl.WebApi/"]
COPY ["src/ExpenseControl.Domain/ExpenseControl.Domain.csproj", "src/ExpenseControl.Domain/"]
COPY ["src/ExpenseControl.Application/ExpenseControl.Application.csproj", "src/ExpenseControl.Application/"]
COPY ["src/ExpenseControl.Infrastructure/ExpenseControl.Infrastructure.csproj", "src/ExpenseControl.Infrastructure/"]
RUN dotnet restore "src/ExpenseControl.WebApi/ExpenseControl.WebApi.csproj"
COPY . .
WORKDIR "/src/src/ExpenseControl.WebApi"
RUN dotnet build -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ExpenseControl.WebApi.dll"]
